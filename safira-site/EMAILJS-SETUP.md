# 📧 Configuração do EmailJS para Formulário de Contato

## Passos para Configurar o EmailJS

### 1. Criar Conta no EmailJS
1. Acesse https://www.emailjs.com/
2. Crie uma conta gratuita
3. Confirme seu email

### 2. Configurar Serviço de Email
1. No painel, vá em **Email Services**
2. Clique em **Add New Service**
3. Selecione **Gmail** (recomendado)
4. Configure com o email: `safiralinhares.psi@gmail.com`
5. Anote o **Service ID** (ex: `service_safira`)

### 3. Criar Template de Email
1. Vá em **Email Templates**
2. Clique em **Create New Template**
3. Configure o template com:

**Subject:** Nova mensagem do site - {{from_name}}

**Content:**
```
Olá Safira,

Você recebeu uma nova mensagem através do site:

Nome: {{from_name}}
Email: {{from_email}}
Telefone: {{phone}}

Mensagem:
{{message}}

---
Enviado automaticamente pelo site
```

4. Anote o **Template ID** (ex: `template_contato`)

### 4. Obter Chave Pública
1. Vá em **Account** → **General**
2. Copie sua **Public Key**

### 5. Configurar no Projeto
Edite os arquivos:
- `src/environments/environment.ts`
- `src/environments/environment.prod.ts`

Substitua as configurações:
```typescript
export const environment = {
  production: false,
  emailjs: {
    serviceId: 'SEU_SERVICE_ID',      // Do passo 2
    templateId: 'SEU_TEMPLATE_ID',    // Do passo 3  
    publicKey: 'SUA_PUBLIC_KEY'       // Do passo 4
  }
};
```

## 🔧 Teste
1. Execute o projeto: `npm start`
2. Acesse a página de contato
3. Preencha e envie o formulário
4. Verifique se o email chegou em `safiralinhares.psi@gmail.com`

## 📝 Variáveis do Template
O formulário envia estas variáveis para o template:
- `{{to_email}}` - safiralinhares.psi@gmail.com
- `{{from_name}}` - Nome do remetente
- `{{from_email}}` - Email do remetente
- `{{phone}}` - Telefone (opcional)
- `{{message}}` - Mensagem
- `{{reply_to}}` - Email para resposta

## 💡 Dicas
- O EmailJS tem limite gratuito de 200 emails/mês
- Configure filtros no Gmail para organizar as mensagens
- Teste sempre em ambiente de desenvolvimento primeiro