import styles from './Perfil.module.css'

// const Perfil = function(){

export default function ({nomeUsuario}) {
    return (
        <header className={styles.header}>
            {/* converte um objeto em uma string */}
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} />
            <h1 className={styles.name}>{nomeUsuario}</h1>
        </header>
    )
}

// export default Perfil;