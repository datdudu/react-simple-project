

function AppBtn({ fn,nome,sobrenome }) {

    const nomeCompleto="Eduardo Carvalho Cardoso"

    return (
        <>
            <button onClick={fn}> {nome} {sobrenome}</button>
        </>
    )
}

export default AppBtn