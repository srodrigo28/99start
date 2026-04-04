# README — Introdução ao Java + Jetpack Compose

## 1. Boas-vindas ao treinamento
Neste treinamento você vai aprender:

- O que é Java  
- O que é Jetpack Compose  
- Quando surgiram  
- Como funcionam  
- Requisitos  
- Instalação  
- Primeiro projeto  
- Estrutura de arquivos  
- Componentes (Composables)  
- Bibliotecas principais  

---

## 2. O que é Java?
Java é uma linguagem de programação orientada a objetos, muito usada no desenvolvimento Android.

---

## 3. O que é Jetpack Compose?
Jetpack Compose é um toolkit moderno para criar interfaces Android de forma declarativa.

---

## 4. Quando surgiram?

Java:
- 1995

Jetpack Compose:
- 2020 (preview)
- 2021 (estável)

---

## 5. Como funciona?

- UI declarativa  
- Sem XML  
- Baseado em funções (Composables)  

---

## 6. Requisitos

- Android Studio  
- JDK  
- Android SDK  

---

## 7. Instalação

Baixar Android Studio:
https://developer.android.com/studio

---

## 8. Criando projeto

1. New Project  
2. Empty Compose Activity  
3. Finish  

---

## 9. Estrutura

```
app/
java/
res/
AndroidManifest.xml
```

---

## 10. Arquivos importantes

- MainActivity.kt  
- AndroidManifest.xml  
- build.gradle  

---

## 11. Primeiro Composable

```
@Composable
fun Greeting() {
    Text("Olá")
}
```

---

## 12. Composables

Funções que constroem UI.

---

## 13. Componentes

- Text  
- Button  
- Column  
- Row  
- Box  

---

## 14. Exemplo

```
Column {
    Text("Home")
}
```

---

## 15. Preview

```
@Preview
@Composable
fun Preview() {
    Greeting()
}
```

---

## 16. Bibliotecas

- Retrofit  
- OkHttp  
- Coil  
- Room  
- Hilt  
- Navigation Compose  

---

## 17. Comandos

```
./gradlew build
./gradlew installDebug
```

---

## 18. Estudo

1. Java/Kotlin  
2. Compose  
3. Navegação  
4. API  

---

## 19. Passo rápido

Criar projeto → rodar → editar UI  

---

## 20. Glossário

- Java → linguagem  
- Compose → UI  
- Composable → componente  
