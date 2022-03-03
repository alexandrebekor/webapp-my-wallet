# 💻 Workbook

[Design no Figma](https://www.figma.com/file/nuodG3B6kIlHHJjqlsz6IH/My-Wallet?node-id=2%3A64)

## 🤔 About the Project

Gerenciamento de contas à pagar e à receber.

```mermaid
flowchart RL;
    subgraph backend
    style backend fill:#DCDCDC, stroke-width: 0
      subgraph Firebase
        style Firebase stroke-width: 0
        Auth<-->Database
      end
    end
    subgraph frontend
    style frontend fill:#DCDCDC, stroke-width: 0
      Admin
    end
    Firebase<-->Admin
```

## 🧪 Tech Stack

### Front-End

- React.js
- Vite.js
- React-Router
- Tailwind.css

### Back-End

- Firebase Realtime
- Firebase Cloud Functions
- Git Actions (CI)
- Prettier
