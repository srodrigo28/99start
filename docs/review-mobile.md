# README — Comparação: Expo (React Native) vs Flutter vs Jetpack Compose

## 1. Introdução

Este documento compara três tecnologias populares para desenvolvimento mobile:

- Expo (React Native)
- Flutter
- Jetpack Compose (Android)

---

## 2. Datas de lançamento

| Tecnologia        | Lançamento |
|------------------|------------|
| Expo             | 2015 (Exponent) / 2017 (Expo) |
| React Native     | 2015 |
| Flutter          | 2017 (beta) / 2018 (estável) |
| Dart             | 2011 |
| Jetpack Compose  | 2020 (preview) / 2021 (estável) |
| Java             | 1995 |

---

## 3. Linguagens utilizadas

| Tecnologia       | Linguagem |
|-----------------|----------|
| Expo            | JavaScript / TypeScript |
| Flutter         | Dart |
| Compose         | Kotlin (principal) / Java (base) |

---

## 4. Como funciona cada um

### Expo (React Native)
- Usa componentes nativos
- Facilita desenvolvimento com ferramentas prontas
- Ideal para iniciantes

### Flutter
- Usa engine próprio (Skia)
- Renderiza tudo na tela
- Alta performance

### Jetpack Compose
- UI declarativa Android
- Substitui XML
- Integração total com Android

---

## 5. Build (geração de app)

### Expo
```
eas build
```

- Build na nuvem
- Fácil publicação

---

### Flutter
```
flutter build apk
flutter build appbundle
```

- Build local
- Controle total

---

### Jetpack Compose
```
./gradlew assembleRelease
```

- Build via Gradle
- Integração com Android Studio

---

## 6. Como rodar o projeto

### Expo
```
npx expo start
```

- QR Code
- Expo Go

---

### Flutter
```
flutter run
```

- Emulador ou dispositivo

---

### Compose
- Rodar pelo Android Studio
- Ou:

```
./gradlew installDebug
```

---

## 7. Facilidade de aprendizado

| Tecnologia | Nível |
|-----------|------|
| Expo      | Muito fácil |
| Flutter   | Médio |
| Compose   | Médio/Difícil |

---

## 8. Performance

| Tecnologia | Performance |
|-----------|------------|
| Expo      | Boa |
| Flutter   | Muito alta |
| Compose   | Nativa (excelente) |

---

## 9. Produtividade

| Tecnologia | Destaque |
|-----------|----------|
| Expo      | Setup rápido |
| Flutter   | UI consistente |
| Compose   | Integração Android |

---

## 10. Principais vantagens

### Expo
- Fácil começar
- Rápido desenvolvimento
- Grande comunidade JS

### Flutter
- UI bonita e consistente
- Alta performance
- Multiplataforma real

### Compose
- Total controle Android
- Performance nativa
- Código moderno

---

## 11. Principais desvantagens

### Expo
- Limitações nativas
- Dependência do ecossistema

### Flutter
- Precisa aprender Dart
- Apps maiores em tamanho

### Compose
- Só Android
- Curva maior

---

## 12. Quando usar cada um

### Use Expo se:
- Quer rapidez
- Já sabe JavaScript
- Projeto simples ou MVP

### Use Flutter se:
- Quer multiplataforma forte
- Performance alta
- UI personalizada

### Use Compose se:
- Foco em Android
- Precisa de máximo controle
- App complexo

---

## 13. Comparação final

| Critério        | Expo | Flutter | Compose |
|----------------|------|--------|--------|
| Facilidade     | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| Performance    | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Multiplataforma| ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐ |
| Controle       | ⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

---

## 14. Conclusão

- Expo → melhor para começar rápido  
- Flutter → melhor equilíbrio geral  
- Compose → melhor para Android puro  

