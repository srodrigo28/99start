# README — Introdução ao Flutter + Dart

## 1. Boas-vindas ao treinamento
Neste treinamento você vai aprender:

- O que é Flutter  
- O que é Dart  
- Quando surgiram  
- Como funcionam  
- Requisitos  
- Instalação  
- Primeiro projeto  
- Estrutura de arquivos  
- Widgets (componentes)  
- Bibliotecas principais  

---

## 2. O que é Flutter?
Flutter é um framework criado pelo Google para desenvolvimento de aplicações:

- Android  
- iOS  
- Web  
- Desktop  

---

## 3. O que é Dart?
Dart é a linguagem usada no Flutter.

- Tipada  
- Orientada a objetos  
- Alta performance  

---

## 4. Quando surgiram?

Flutter:
- 2017 (beta)
- 2018 (estável)

Dart:
- 2011

---

## 5. Como funciona?

- Usa próprio motor gráfico  
- Não depende de componentes nativos  

Fluxo:
1. Criar app  
2. Rodar  
3. Editar  
4. Hot Reload  

---

## 6. Requisitos

- Sistema operacional (Windows/Mac/Linux)  
- Git  
- VS Code ou Android Studio  

---

## 7. Instalação

### Baixar Flutter
https://flutter.dev

### Verificar instalação
```
flutter doctor
```

---

## 8. Criando projeto

```
flutter create meu_app
cd meu_app
flutter run
```

---

## 9. Estrutura

```
lib/
main.dart
pubspec.yaml
```

---

## 10. Arquivos importantes

### main.dart
```
void main() {
  runApp(MyApp());
}
```

### pubspec.yaml
Gerencia dependências.

---

## 11. Primeiro app

```
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}
```

---

## 12. Widgets

Tudo é widget:

- Text  
- Container  
- Column  
- Row  

---

## 13. Widgets comuns

- MaterialApp  
- Scaffold  
- AppBar  
- Text  
- ElevatedButton  

---

## 14. Exemplo

```
Text("Olá Flutter")
```

---

## 15. Hot Reload

Atualiza o app em tempo real.

---

## 16. Bibliotecas

- http  
- dio  
- provider  
- riverpod  
- bloc  
- hive  

---

## 17. Comandos

```
flutter run
flutter doctor
flutter pub get
```

---

## 18. Estudo

1. Dart  
2. Widgets  
3. Layout  
4. API  
5. Estado  

---

## 19. Passo rápido

```
flutter create app
cd app
flutter run
```

---

## 20. Glossário

- Flutter → framework  
- Dart → linguagem  
- Widget → componente  
