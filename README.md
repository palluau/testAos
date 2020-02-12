# Test AOS

## Requirements

Le but est de créer une petite application de login via email et mot de passe et de créer 2 tests automatisés avec Puppeteer.

A. Création de l'application
1) Créer une page d'identification dans lequel l'utilisateur doit rentrer un Email et un Mot de passe
2) Implémenter dans la base de donnée un "compte" qui te permettra de tester ton portail
3) Si les credentials sont bons tu es redirigé vers une page avec un texte sur la page : Success
4) Si les crédentials ne sont pas bon un message d'erreur apparaît sur la page de login

B. Tester avec Puppeteer
1) Coder l'automatisation du test sur Puppeteer (2 tests)
<br />-> Un test pour le login success
<br />-> Un test pour le login error
<br />-> Executer pupertee en mode console (les deux tests doivent passer)

### Credentials du compte

<b>Email</b>: julespalluau@gmail.com<br />
<b>Password</b>: test123

## Lancement et installation

### Script d'installation

```
npm install
```
### Script de lancement du front et du serveur

``` 
npm start 
```
Le front se lance sur l'adresse: http://localhost:3001/

### Script de lancement des tests avec jest et puppeteer

```
npm run test
```
