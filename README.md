
# mui-react-alert

An Better way to call mui alert dialog

## Installation

Install mui-react-alert with npm

```bash
  npm i mui-react-alert
```

## Demo

<https://codesandbox.io/s/funny-mestorf-k2dcph>

## Usage/Examples

App.tsx

```javascript
import { AlertDialog } from "mui-react-alert";

function App() {
  return (
    <div className="App">
      <AlertDialog />
    </div>
  );
}

export default App;

```

Button.tsx

```javascript
import { showAlertConfirmarion } from "mui-react-alert";

function Button() {
  return (
      <button
      onClick={() => {
          showAlertConfirmarion({
          title: "Use Google's location service?",
          cancelLabel: "DISAGREE",
          confirmLabel: "AGREE",
          subtitle:
            "Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.",
          onConfirmation: function (): void {
            alert("Say hello");
          },
        });
      }}
    >
      Show alert dialog
    </button>
  );
}

export default Button;

```

## Contributing

Contributions are always welcome!

## Support

For support, email akshayshan28@gmail.com
