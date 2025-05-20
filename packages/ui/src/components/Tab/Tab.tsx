import {
  Tab as ReactAriaTab,
  TabList as ReactAriaTabList,
  TabPanel as ReactAriaTabPanel,
  Tabs as ReactAriaTabs,
  TabListProps,
  TabPanelProps,
  TabProps,
  TabsProps,
} from "react-aria-components";
import { mergeClassNames } from "../../utils/merge-class-names";
import styles from "./tab.module.css";
console.log(styles);

export function Tab({ className, ...props }: TabProps) {
  return (
    <ReactAriaTab
      {...props}
      className={mergeClassNames(styles.tab, className)}
    />
  );
}

export function TabList<T extends object>({
  className,
  ...props
}: TabListProps<T>) {
  return (
    <ReactAriaTabList
      {...props}
      className={mergeClassNames(styles.tabList, className)}
    />
  );
}

export function TabPanel({ className, ...props }: TabPanelProps) {
  return (
    <ReactAriaTabPanel
      {...props}
      className={mergeClassNames(styles.tabPanel, className)}
    />
  );
}

export function Tabs({ className, ...props }: TabsProps) {
  return (
    <ReactAriaTabs
      {...props}
      className={mergeClassNames(styles.tabs, className)}
    />
  );
}
