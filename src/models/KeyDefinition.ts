import { ReactElement } from 'react';

export default interface KeyDefinition {

  onClick: () => void;
  value: string|ReactElement;
}
