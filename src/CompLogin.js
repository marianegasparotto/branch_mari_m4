import React, { useState } from 'react';
import styles from './complogin.module.css'
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CompLogin = () => {
  // valores iniciais vazios do input 
	const [nome, setNome] = useState("");
	const [email, setEmail] = useState("");
	const [senha, setSenha] = useState("");
	const [senhaConf, setSenhaConf] = useState ("");
	const [error, setError] = useState("");
	const [modal, setModal] = useState(false);
	const [cadastroEnviado, setCadastroEnviado] = useState(false); 
  const [email_l, setEmail_l] = useState("");
	const [senha_l, setSenha_l] = useState("");
  const [error_l, setError_l] = useState("");

  // se a senha ou email de login estiver vazio não prossegue 
  const handleLogin = () => {
    if (!email_l || !senha_l){
    setError_l("Preencha todos os campos");
		return;
    }
  }
   // se os inputs de cadastro estiver vazio não prossegue 
	const toggle = () => {
	  setModal((prevState) => !prevState);
	};
	const handleSignup = (e) => {
		e.preventDefault();
	  if (!nome || !email || !senha || !senhaConf) {
		setError("Preencha todos os campos");
		return;
    //ou se a senha e a confirmação estiverem diferentes não prossegue
	  } else if (senha !== senhaConf) {
		setError("As senhas não são iguais");
		return;
	  }else{
		setModal(true);
      	setCadastroEnviado(true);
	  }
	}  
	return (
	<div className={styles.plano}>
    {/* engloba os forms da pagina  */}
      <div className={styles.container}>
        {/* div de cadastro  */}
        <div className={styles.cadastro}>
          <h2>Cadastro</h2>
          <Form onSubmit={handleSignup}>
            <FormGroup className={styles.divInput}>
              <Label for="nomeInput">Nome</Label>
              <Input
                className={styles.textarea}
                type="text"
                id="nomeInput"
                value={nome}
                onChange={(e) => [setNome(e.target.value), setError("")]}
              />
            </FormGroup>
            <FormGroup className={styles.divInput}>
              <Label for="emailInput">E-mail</Label>
              <Input
                className={styles.textarea}
                type="email"
                id="emailInput"
                value={email}
                onChange={(e) => [setEmail(e.target.value), setError("")]}
              />
            </FormGroup>
            <FormGroup className={styles.divInput}>
              <Label for="senhaInput">Senha</Label>
              <Input
                className={styles.textarea}
                type="password"
                id="senhaInput"
                value={senha}
                onChange={(e) => [setSenha(e.target.value), setError("")]}
              />
            </FormGroup>
            <FormGroup className={styles.divInput}>
              <Label for="senhaConfInput">Confirme a senha</Label>
              <Input
                className={styles.textarea}
                type="password"
                id="senhaConfInput"
                value={senhaConf}
                onChange={(e) => [setSenhaConf(e.target.value), setError("")]}
              />
            </FormGroup>
            {/* mensagem de erro caso os inputs estejam vazios  */}
            {error && <p style={{ color: 'yellow' }}>{error}</p>}
            <Button className={styles.buttonC} type="submit" onClick={handleSignup} >Enviar</Button>
          </Form>
        </div>
          {/* div de login  */}
          <div>
            <h2>Login</h2>
            <Form>
              <FormGroup className="divInput">
                <Label for="exampleEmail">Email</Label>
                <Input className={styles.textarea} type="email"
                id="emailInput"
                value={email_l}
                onChange={(e) => [setEmail_l(e.target.value), setError("")]} />
              </FormGroup>
              <FormGroup className="divInput">
                <Label for="examplePassword">Senha</Label>
                <Input className={styles.textarea} type="password"
                id="senhaInput"
                value={senha_l}
                onChange={(e) => [setSenha_l(e.target.value), setError("")]} />
              </FormGroup>
              {/* mensagem de erro caso os inputs estejam vazios ou senhas não confiram  */}
              {error_l && <p style={{ color: 'yellow' }}>{error_l}</p>}
              <Button onClick={handleLogin} >Entrar</Button>
            </Form>
          </div>
        </div>	
        {/* modal confirmando o cadastramento  */}
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Cadastro enviado!</ModalHeader>
          <ModalBody>
            Seu cadastro foi enviado com sucesso.
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" toggle={toggle} onClick={() => window.location.reload()}>Fechar</Button>
          </ModalFooter>
        </Modal>
      </div>
	)
  }


  export default CompLogin


