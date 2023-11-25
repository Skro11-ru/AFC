import { classNames } from '@src/7.shared/lib/classNames/classNames';
import { AppButton } from '@src/7.shared/ui/AppButton';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import cls from './Counter.module.scss';

interface ICounterProps {
	className?: string;
}

export const User = ({ className }: ICounterProps) => {
	// const { t } = useTranslation('translation');
	// const dispatch = useDispatch();
	// const counterValue = useSelector(getCounterValue);
	// const increment = () => {
	// 	dispatch(counterActions.increment());
	// };
	// const decrement = () => {
	// 	dispatch(counterActions.decrement());
	// };
	// return (
	// 	<div className={classNames([cls.counter, className ?? ''])}>
	// 		<h1 data-testid="value-title">{counterValue}</h1>
	// 		<AppButton onClick={increment} data-testid="increment-btn">
	// 			{t('increment')}
	// 		</AppButton>
	// 		<AppButton onClick={decrement} data-testid="decrement-btn">
	// 			{t('decrement')}
	// 		</AppButton>
	// 	</div>
	// );
};
