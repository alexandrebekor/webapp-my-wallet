# Workbook

[Design no Figma](https://www.figma.com/file/nuodG3B6kIlHHJjqlsz6IH/My-Wallet?node-id=2%3A64)

## 🤔 About the Project

Blog sobre Desenvolvimento web, carreira e negócios com foco em programação.

```mermaid
flowchart LR;
    Admin-->Auth
    subgraph Backend
      Auth<-->Database
    end
    subgraph Frontend
      Admin
    end
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
