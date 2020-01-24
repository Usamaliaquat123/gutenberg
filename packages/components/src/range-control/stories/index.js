/**
 * External dependencies
 */
import styled from '@emotion/styled';
import { boolean, number, select, text } from '@storybook/addon-knobs';

/**
 * WordPress dependencies
 */
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import RangeControl from '../';
import { RangeControlNext } from '../range-control';

export default { title: 'Components/RangeControl', component: RangeControl };

const RangeControlWithState = ( props ) => {
	const initialValue = props.value === undefined ? 5 : props.value;
	const [ value, setValue ] = useState( initialValue );

	return <RangeControl { ...props } value={ value } onChange={ setValue } />;
};

export const _default = () => {
	const label = text( 'Label', 'How many columns should this use?' );

	return <RangeControlWithState label={ label } />;
};

export const InitialValueZero = () => {
	const label = text( 'Label', 'How many columns should this use?' );

	return (
		<RangeControlWithState
			initialPosition={ 0 }
			label={ label }
			max={ 20 }
			min={ 0 }
			value={ null }
		/>
	);
};

export const withHelp = () => {
	const label = text( 'Label', 'How many columns should this use?' );
	const help = text(
		'Help Text',
		'Please select the number of columns you would like this to contain.'
	);

	return <RangeControlWithState label={ label } help={ help } />;
};

export const withMinimumAndMaximumLimits = () => {
	const label = text( 'Label', 'How many columns should this use?' );
	const min = number( 'Min Value', 2 );
	const max = number( 'Max Value', 10 );

	return <RangeControlWithState label={ label } min={ min } max={ max } />;
};

export const withIconBefore = () => {
	const label = text( 'Label', 'How many columns should this use?' );
	const icon = text( 'Icon', 'wordpress' );

	return <RangeControlWithState label={ label } beforeIcon={ icon } />;
};

export const withIconAfter = () => {
	const label = text( 'Label', 'How many columns should this use?' );
	const icon = text( 'Icon', 'wordpress' );

	return <RangeControlWithState label={ label } afterIcon={ icon } />;
};

export const withReset = () => {
	const label = text( 'Label', 'How many columns should this use?' );

	return <RangeControlWithState label={ label } allowReset />;
};

export const next = () => {
	const props = {
		alwaysShowTooltip: boolean( 'alwaysShowToolTip', false ),
		min: number( 'min', 0 ),
		max: number( 'max', 10 ),
		step: number( 'step', 1 ),
		marks: boolean( 'marks', false ),
		tooltipPosition: select( 'tooltipPosition', {
			top: 'top',
			bottom: 'bottom',
			auto: 'auto',
		}, 'auto' ),
	};

	return (
		<Wrapper>
			<RangeControlNext { ...props } />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	padding: 40px;
`;
