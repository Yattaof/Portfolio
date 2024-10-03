import styles from './footballTxt.module.scss';

interface TextProps {
	value: string;
}

const Text: React.FC<TextProps> = ({ value }) => (
	<div className={styles.text}>
		{value.split('').map((char, i) => (
			<div key={i}>
				{char === ' ' && <div className={styles.space} />}
				{char !== ' ' && (
					<div
						className={styles.letter}
						style={{ '--delay': `${i * 0.2}s` } as React.CSSProperties}
					>
						<span className={styles.source}>{char}</span>
						<span className={styles.shadow}>{char}</span>
						<span className={styles.overlay}>{char}</span>
					</div>
				)}
			</div>
		))}
	</div>
);

export default Text;
