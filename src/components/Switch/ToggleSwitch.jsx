import React, { forwardRef, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const sizeClasses = {
  sm: 'w-8 h-4',
  md: 'w-11 h-6',
  lg: 'w-14 h-7'
};

const thumbSizeClasses = {
  sm: 'w-3 h-3',
  md: 'w-5 h-5',
  lg: 'w-6 h-6'
};

const labelSizeClasses = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg'
};

const ToggleSwitch = forwardRef(
  (
    {
      size = 'md',
      color = '#3b82f6',
      showIcons = false,
      disabled = false,
      defaultChecked,
      checked,
      onChange,
      className = '',
      ...props
    },
    ref
  ) => {
    const isControlled = checked !== undefined;
    const [internalChecked, setInternalChecked] = useState(defaultChecked || false);
    
    const handleChange = (event) => {
      if (!isControlled) {
        setInternalChecked(event.target.checked);
      }
      onChange?.(event.target.checked);
    };

    const switchChecked = isControlled ? checked : internalChecked;

    return (
      <label
        className={`inline-flex items-center gap-3 cursor-pointer ${
          disabled ? 'opacity-50 cursor-not-allowed' : ''
        } ${className}`}
      >
        <div className="relative inline-flex items-center">
          <input
            type="checkbox"
            className="sr-only"
            checked={switchChecked}
            disabled={disabled}
            onChange={handleChange}
            ref={ref}
            {...props}
          />
          <div
            className={`${
              sizeClasses[size]
            } bg-gray-200 rounded-full peer transition-all duration-300 ease-in-out ${
              switchChecked ? '' : 'peer-focus:ring-2 peer-focus:ring-offset-2'
            }`}
            style={{
              backgroundColor: switchChecked ? color : undefined,
            }}
          >
            <div
              className={`${
                thumbSizeClasses[size]
              } absolute top-1/2 -translate-y-1/2 left-0.5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                switchChecked ? 'translate-x-full' : ''
              }`}
            >
              {showIcons && (
                <div className="absolute inset-0 flex items-center justify-center">
                  {switchChecked ? (
                    <Sun className="w-3 h-3 text-yellow-500" />
                  ) : (
                    <Moon className="w-3 h-3 text-gray-400" />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </label>
    );
  }
);

export default ToggleSwitch;
