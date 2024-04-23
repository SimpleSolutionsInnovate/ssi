## FormBuilder Component

The `FormBuilder` component allows dynamic creation of forms with various field types, leveraging the power of Material-UI and React Hook Form for styling and functionality.

### Props

| Prop           | Type                  | Description                                         |
| -------------- | --------------------- | --------------------------------------------------- |
| `elements`     | `FormElement[]`       | Configuration for each form element to be rendered. |
| `onSubmit`     | `(data: any) => void` | Callback function when the form is submitted.       |
| `loadingState` | `boolean`             | Indicates if the form is currently submitting.      |

### FormElement Interface

Each object in the `elements` array should conform to the following interface:

| Property      | Type     | Description                                                      |
| ------------- | -------- | ---------------------------------------------------------------- |
| `id`          | `string` | Unique identifier for the form element.                          |
| `label`       | `string` | Text to display for the form element.                            |
| `name`        | `string` | Name attribute of the form element, used for form submission.    |
| `eType`       | `string` | The type of element, e.g., 'text', 'password', 'email', etc.     |
| `dType`       | `string` | HTML input type, mainly used for buttons.                        |
| `options`     | `Array`  | Options for 'select' elements, each with `value` and `label`.    |
| `placeholder` | `string` | Placeholder text for the form element.                           |
| `validation`  | `object` | Rules for `react-hook-form` validation.                          |
| `width`       | `number` | Width of the element as a percentage.                            |
| `helperText`  | `string` | Helper text displayed below the form element.                    |
| `mData`       | `object` | Additional metadata like `align`, `accept` for file inputs, etc. |

### Usage

Integrate the `FormBuilder` into your React application like so:

```jsx
import React from 'react';
import FormBuilder from '@msflib/react';
import { formElements } from './yourFormElementsConfig';

function App() {
  const handleSubmit = (data) => {
    console.log(data);
  };

  return <FormBuilder elements={formElements} onSubmit={handleSubmit} />;
}

export default App;
```
