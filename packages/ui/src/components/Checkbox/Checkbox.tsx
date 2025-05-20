import cls from "@fvilers/cls";
import {
  Checkbox as ReactAriaCheckbox,
  CheckboxProps as ReactAriaCheckboxProps,
} from "react-aria-components";
import styles from "./checkbox.module.css";

type CheckboxProps = Omit<ReactAriaCheckboxProps, "className"> & {
  className?: string;
};

export function Checkbox({ children, className, ...props }: CheckboxProps) {
  return (
    <ReactAriaCheckbox {...props} className={styles.reactAriaCheckbox}>
      {({ isIndeterminate }) => (
        <>
          <div className={cls(styles.checkbox, className)}>
            <svg
              aria-hidden="true"
              className={styles.checkmark}
              viewBox="0 0 18 18"
            >
              {isIndeterminate ? (
                <rect height={3} width={15} x={1} y={7.5} />
              ) : (
                <polyline points="1 9 7 14 15 4" />
              )}
            </svg>
          </div>
          {children}
        </>
      )}
    </ReactAriaCheckbox>
  );
}
