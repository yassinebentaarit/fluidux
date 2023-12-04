import React from 'react'
import { AuthProvider } from './App/Context/AuthContext';
import AppNav from './App/Navigations/AppNav';

export default function App() {
  return (
    <AuthProvider>
      <AppNav/>
    </AuthProvider>
  );
}
