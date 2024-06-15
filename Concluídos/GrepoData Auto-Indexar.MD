# 📜 **GrepoData Auto_Indexar - Script para Grepolis**

Bem-vindo ao **GrepoData Auto_Indexar**! 🏰

Este script, desenvolvido para ser usado com Tampermonkey ou Greasemonkey, tem como objetivo automatizar a indexação de relatórios no jogo **Grepolis**. Criado para melhorar a eficiência e a experiência de gestão de dados dos jogadores, o **GrepoData Auto_Indexar** facilita o envio de relatórios de batalhas e outras informações diretamente para o [GrepoData](https://grepodata.com/indexer).

## 📌 **Descrição**

### **Nome:** GrepoData Auto_Indexar  
### **Versão:** 2.0.0  
### **Autor:** BadUser  
### **Homepage:** [GrepoData Indexer](https://grepodata.com/indexer)  
### **Descrição:** Este script permite a automação da indexação dos relatórios do jogo.  
### **Compatibilidade:**  
- URLs do jogo: `https://*.grepolis.com/game/*`  
- GrepoData: `https://grepodata.com*`  
- **Ícone:** ![GrepoData Icon](https://grepodata.com/assets/images/grepodata_icon.ico)

## 🚀 **Funcionalidades**

- **Automatização Completa:** Envia relatórios automaticamente para o GrepoData.
- **Integração com API:** Carrega scripts e estilos diretamente da API do GrepoData para manter tudo atualizado.
- **Uso Simples:** Apenas instale o script e ele cuidará da indexação sem necessidade de configurações adicionais.

## 📥 **Como Usar**

1. **Instale o Tampermonkey ou Greasemonkey** no seu navegador.
2. **Adicione este script** ao Tampermonkey/Greasemonkey:
   - [Link do Script](https://grepodata.com/indexer)
3. **Jogue normalmente** e deixe o script cuidar da indexação dos relatórios automaticamente.

## 🛠️ **Como Funciona**

O script adiciona automaticamente um script e um stylesheet personalizados do GrepoData ao cabeçalho da página do Grepolis. Utiliza um timestamp para garantir que os recursos sejam atualizados com frequência.

```javascript
(function() {
    var rand = Math.floor((Date.now()/1000)/(60*60)) + "";
    var CustomStyleJS = document.createElement('script');
    CustomStyleJS.type = 'text/javascript';
    CustomStyleJS.src = 'https://api.grepodata.com/script/indexer.js?v=' + rand;
    document.getElementsByTagName("head")[0].appendChild(CustomStyleJS);
    var CustomStyleCSS = document.createElement('link');
    CustomStyleCSS.rel = 'stylesheet';
    CustomStyleCSS.type = 'text/css';
    CustomStyleCSS.href = 'https://api.grepodata.com/script/indexer.css?v=' + rand;
    document.getElementsByTagName("head")[0].appendChild(CustomStyleCSS);
    console.log("Added GrepoData City Indexer by Tamper/GreaseMonkey");
})();```

## 📝 **Contribuição**

Contribuições são bem-vindas! Se você tiver sugestões, correções ou novas funcionalidades para o **GrepoData Auto_Indexar**, siga estas etapas para colaborar:

1. **Fork este repositório:** Clique no botão "Fork" no canto superior direito desta página para criar uma cópia do repositório em sua conta.

2. **Crie um branch para sua contribuição:** Em seu repositório forked, crie um novo branch com um nome descritivo para sua contribuição. Por exemplo:
    ```bash
    git checkout -b minha-melhoria
    ```

3. **Faça suas alterações:** Edite o código, adicione novas funcionalidades ou corrija bugs.

4. **Commit suas alterações:** Adicione uma mensagem de commit clara e descritiva sobre o que foi alterado.
    ```bash
    git commit -m "Descrição clara do que foi alterado"
    ```

5. **Envie as alterações para seu repositório forked:** 
    ```bash
    git push origin minha-melhoria
    ```

6. **Abra um Pull Request:** No repositório original, vá até a aba "Pull Requests" e clique em "New Pull Request". Compare seu branch com o branch principal e submeta o Pull Request.

### **Código de Conduta**

Ao contribuir, siga o [Código de Conduta](https://github.com/seu-usuario/seu-repositorio/blob/main/CODE_OF_CONDUCT.md) para manter um ambiente colaborativo e respeitoso.

### **Reportar Problemas**

Para reportar bugs ou solicitar novas funcionalidades, por favor abra uma [issue](https://github.com/seu-usuario/seu-repositorio/issues). Forneça o máximo de detalhes possível para ajudar na reprodução e solução do problema.

---

Agradecemos seu interesse em contribuir para o **GrepoData Auto_Indexar**! Vamos juntos tornar o jogo Grepolis ainda mais divertido e eficiente.
