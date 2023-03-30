import { ReactNode } from "react";
import styles from "./styles.module.scss";

export const Layer = ({ children }: { children: ReactNode }) => {
  return <main className={styles.body}>{children}</main>;
};
