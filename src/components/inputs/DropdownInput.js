import * as React from 'react';
import PropTypes from 'prop-types';
import { Select as BaseSelect } from '@mui/base/Select';
import { Option as BaseOption, optionClasses } from '@mui/base/Option';
import { styled } from '@mui/system';
import UnfoldMoreRoundedIcon from '@mui/icons-material/UnfoldMoreRounded';
import { CssTransition } from '@mui/base/Transitions';
import { PopupContext } from '@mui/base/Unstable_Popup';
import { grey } from '@mui/material/colors';
import { Box, Typography } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import InputsTooltip from './components/InputsTooltip';

export default function DropdownInput({ name, description, tip, onChange, initialValue, options }) {

  const handleonChange = (value) => {
    onChange(value);
  };


  return (
    <Box sx={{ display: "grid" }} gap={1}>
      <Box sx={{ display: "flex", alignItems: "center" }} gap={1}>
        <Typography variant="body2">{name}</Typography>
        {description && (
          <InputsTooltip title={description} placement="top">
            <InfoOutlinedIcon style={{ color: grey[600], fontSize: 16 }} />
          </InputsTooltip>
        )}
        <Box flexGrow={1} />
        <Typography sx={{ color: grey[500], fontSize: 12 }}>{tip}</Typography>
      </Box>
      <Select defaultValue={initialValue} onChange={(_, value) => handleonChange(value)}>
        {options ? options.map((option) => (
          <Option key={option.value} value={option.value} disabled={option.disabled}>
            {option.label}
          </Option>
        )) : null}
      </Select>
    </Box>
  );
}

const Select = React.forwardRef(function CustomSelect(props, ref) {
  const slots = {
    root: StyledButton,
    listbox: AnimatedListbox,
    popup: Popup,
    ...props.slots,
  };

  return <BaseSelect {...props} ref={ref} slots={slots} />;
});

Select.propTypes = {
  slots: PropTypes.shape({
    listbox: PropTypes.elementType,
    popup: PropTypes.elementType,
    root: PropTypes.elementType,
  }),
};

const Button = React.forwardRef(function Button(props, ref) {
  const { ownerState, ...other } = props;
  return (
    <button type="button" {...other} ref={ref}>
      {other.children}
      <UnfoldMoreRoundedIcon />
    </button>
  );
});

Button.propTypes = {
  children: PropTypes.node,
  ownerState: PropTypes.object.isRequired,
};

const StyledButton = styled(Button, { shouldForwardProp: () => true })(
  ({ _ }) => `
  font-size: 1rem;
  box-sizing: border-box;
  min-width: 320px;
  padding: 8px 10px;
  border-radius: 6px;
  text-align: left;
  line-height: 1.5;
  background: ${'#fff'};
  border: 1px solid ${grey[300]};
  color: ${'black'};
  position: relative;

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    border-color: ${'#007DFC'};
  }

  & > svg {
    font-size: 1rem;
    position: absolute;
    height: 100%;
    top: 0;
    right: 10px;
  }
  `,
);

const Listbox = styled('ul')(
  ({ _ }) => `
  font-size: 1rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 6px 0;
  min-width: 329px;
  border-radius: 6px;
  overflow: auto;
  outline: 0px;
  background: ${'#fff'};
  border: 1px solid ${grey[300]};
  color: ${'black'};
    };
  
  .closed & {
    opacity: 0;
    transform: scale(0.95, 0.8);
    transition: opacity 200ms ease-in, transform 200ms ease-in;
  }
  
  .open & {
    opacity: 1;
    transform: scale(1, 1);
    transition: opacity 100ms ease-out, transform 100ms cubic-bezier(0.43, 0.29, 0.37, 1.48);
  }

  .placement-top & {
    transform-origin: bottom;
  }

  .placement-bottom & {
    transform-origin: top;
  }
  `,
);

const AnimatedListbox = React.forwardRef(function AnimatedListbox(props, ref) {
  const { ownerState, ...other } = props;
  const popupContext = React.useContext(PopupContext);

  if (popupContext == null) {
    throw new Error(
      'The `AnimatedListbox` component cannot be rendered outside a `Popup` component',
    );
  }

  const verticalPlacement = popupContext.placement.split('-')[0];

  return (
    <CssTransition
      className={`placement-${verticalPlacement}`}
      enterClassName="open"
      exitClassName="closed"
    >
      <Listbox {...other} ref={ref} />
    </CssTransition>
  );
});

AnimatedListbox.propTypes = {
  ownerState: PropTypes.object.isRequired,
};

const Option = styled(BaseOption)(
  ({ _ }) => `
  list-style: none;
  padding: 8px;
  margin-bottom: 4px;
  border-radius: 6px;
  cursor: default;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionClasses.selected} {
    background-color: ${grey[300]};
    color: ${'black'};
  }

  &.${optionClasses.highlighted} {
   background-color: ${grey[300]};
    color: ${'black'};
  }

  &:focus-visible {
    background-color: ${grey[300]};
  }
  
  &.${optionClasses.highlighted}.${optionClasses.selected} {
    background-color: ${grey[300]};
    color: ${'black'};
  }

  &.${optionClasses.disabled} {
    color: ${'black'};
  }

  &:hover:not(.${optionClasses.disabled}) {
    background-color: ${grey[300]};
    color: ${'black'};
  }

  &.${optionClasses.selected}::after {
    content: '✓';
    font-size: 1rem;
    color: black;
    margin-left: auto;
  }
  `,
);

const Popup = styled('div')`
  z-index: 1;
`;
