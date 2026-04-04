# README — Introdução ao React Expo

## 1. Boas-vindas ao treinamento
Neste treinamento você vai aprender:
- O que é React Expo  
- Quando surgiu  
- Como funciona  
- Requisitos  
- Instalação  
- Primeiro projeto  
- Estrutura de arquivos  
- Login Expo  
- Componentes  
- Bibliotecas principais  

---

## 2. O que é React Expo?
Expo é um framework para criar apps com React Native para Android, iOS e Web de forma simplificada.

---

## 3. Quando surgiu o Expo?
- 2015: chamado Exponent  
- 2017: passou a se chamar Expo  
- Atual: constantemente atualizado  

---

## 4. Como funciona?
Você cria apps com React e roda em:
- Android  
- iOS  
- Web  

Fluxo:
1. Criar projeto  
2. Rodar servidor  
3. Testar no celular  
4. Desenvolver  
5. Gerar build  

---

## 5. Requisitos
- Node.js LTS  
- VS Code  
- Expo Go (celular)  

---

## 6. Instalação

### Instalar Node
```
node -v
npm -v
```

### Criar projeto
```
npx create-expo-app@latest mobile
npx create-expo-app@latest -t expo-template-blank mobile
npx create-expo-app@latest mobile2 -t blank-typescript
cd meu-app
npx expo start
```

---

## 7. Estrutura do projeto

```
app/
assets/
package.json
app.json
```

### Arquivos importantes
- package.json → dependências  
- app.json → config do app  
- app/ → telas  

---

## 8. Login Expo

```
npm install -g eas-cli
eas login
```

Usado para build e publicação.

---

## 9. Primeiro componente

```tsx
import { Text } from 'react-native';

export function Title() {
  return <Text>Olá Expo</Text>;
}
```

---

## 10. Componentes básicos
- View  
- Text  
- Image  
- TextInput  
- Pressable  
- ScrollView  
- FlatList  

---

## 11. Exemplo de tela

```tsx
import { View, Text } from 'react-native';

export default function App() {
  return (
    <View>
      <Text>Meu App</Text>
    </View>
  );
}
```

---

## 12. Bibliotecas mais usadas
- Expo Router  
- React Navigation  
- Reanimated  
- Gesture Handler  
- Async Storage  
- TanStack Query  
- Zustand  
- NativeWind  
- React Hook Form  
- Zod  

---

## 13. Comandos úteis

```
npx expo start
npx expo install pacote
eas login
eas whoami
```

---

## 14. Próximos passos
- Navegação  
- APIs  
- Autenticação  
- Estado  
- Publicação  

---

## 15. Glossário
- Expo → framework  
- React Native → apps nativos  
- Expo Go → app de teste  
- EAS → build/publicação  
