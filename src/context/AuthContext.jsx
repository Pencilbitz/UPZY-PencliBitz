import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

// Default super admin credentials
const SUPER_ADMIN = {
  email: 'admin@upzypencilbitz.com',
  password: 'Admin@2026',
  name: 'Super Admin',
  role: 'superadmin'
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('upzy_admin_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    // Initialize super admin if not exists
    const users = JSON.parse(localStorage.getItem('upzy_admin_users') || '[]');
    if (!users.find(u => u.email === SUPER_ADMIN.email)) {
      users.push({ ...SUPER_ADMIN, id: 'sa_001', createdAt: new Date().toISOString() });
      localStorage.setItem('upzy_admin_users', JSON.stringify(users));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem('upzy_admin_users') || '[]');
    const foundUser = users.find(u => u.email === email && u.password === password);
    if (foundUser) {
      const sessionUser = { id: foundUser.id, email: foundUser.email, name: foundUser.name, role: foundUser.role };
      setUser(sessionUser);
      localStorage.setItem('upzy_admin_user', JSON.stringify(sessionUser));
      return { success: true, user: sessionUser };
    }
    return { success: false, error: 'Invalid email or password' };
  };

  const register = (name, email, password) => {
    const users = JSON.parse(localStorage.getItem('upzy_admin_users') || '[]');
    if (users.find(u => u.email === email)) {
      return { success: false, error: 'Email already registered' };
    }
    const newUser = {
      id: 'admin_' + Date.now(),
      name,
      email,
      password,
      role: 'admin',
      createdAt: new Date().toISOString()
    };
    users.push(newUser);
    localStorage.setItem('upzy_admin_users', JSON.stringify(users));
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('upzy_admin_user');
  };

  const isSuperAdmin = () => user?.role === 'superadmin';

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading, isSuperAdmin }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
export default AuthContext;
