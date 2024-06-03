import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	base: '/VietTriDao/', // Thay 'my-react-app' bằng tên repository của bạn
	plugins: [react()]
});
