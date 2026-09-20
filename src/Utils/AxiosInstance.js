/**
 * AxiosInstance 파일
 */

import axios from 'axios';
import serverUrl from './ServerUrl';

const baseURL = serverUrl;

const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      console.log("accessToken", accessToken);
      config.headers["authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // 401 에러 및 재시도 안했을 때
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // refresh-token으로 새 토큰 요청
        const response = await axiosInstance.post('/api/auth/refresh-token');

        // 로컬 스토리지에 토큰 저장
        const newAccessToken = response.data.accessToken;
        localStorage.setItem("accessToken", newAccessToken);

        // 원래 요청에 새 토큰 적용
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

        // 원래 요청 재시도
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        // refresh-token도 만료된 경우: 로그아웃 등 처리
        console.error('Refresh Token 실패: ', refreshError);
        window.location.href = '/'; // 기본 페이지로 이동
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
)

export default axiosInstance;