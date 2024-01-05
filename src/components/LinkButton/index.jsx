/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-target-blank */
import styles from "./styles.module.css"

export default function LinkButton(props) {
    return (
        <a className={styles.wrapper} href={props.href} target="_blank">{props.children}</a >
    )
}