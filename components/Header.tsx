import React from 'react';
import { Theme } from '../themes';
import ThemeSelector from './ThemeSelector';

interface HeaderProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const Header: React.FC<HeaderProps> = ({ theme, setTheme }) => {
  return (
    <header className="bg-white shadow-sm border-b border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center gap-3">
            <h1 className="text-xl sm:text-2xl font-bold text-slate-800">
              بوصلة عمل المربية في مركز رياحين لذوي الاحتياجات الخاصة
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <ThemeSelector setTheme={setTheme} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;