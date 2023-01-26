import { useState } from "react"
import Profile from "../../assets/imgs/header/profile.png"
import Moon from "../../assets/imgs/header/moon.svg"
import * as S from "./headerStyle"
import Menu from "../../assets/imgs/header/menu.svg"

export default function App() {
    const [open, setOpen] = useState(true)
    const Modal = () => {
        setOpen(!open)
    }

    return (
        <S.Header>
            <S.HeaderDiv>
                <S.Div>
                    <S.Img src={Profile} alt="a" />
                    <S.Name>Robert J.</S.Name>
                    <S.Borda></S.Borda>
                    <S.Role>Desenvolvedor Front-end</S.Role>
                </S.Div>
                {open &&
                    <S.Nav>
                        <S.Ul>
                            <S.LinkS to="/">Sobre Mim</S.LinkS>
                            <S.LinkS to="/experience">Experiencia</S.LinkS>
                            <S.LinkS to="/projects">Projetos</S.LinkS>
                            <S.LinkS to="/competence">Competência</S.LinkS>
                            <S.LinkS to="/certificates">Certificados</S.LinkS>
                            <S.LinkS to="/contact">Contato</S.LinkS>
                        </S.Ul>
                    </S.Nav>}
                <S.MenuDiv>
                    <S.ImgMenu onClick={() => { Modal() }} src={Menu} alt="" />
                </S.MenuDiv>
                <S.DivMode>
                    <S.Moon src={Moon} alt="" />
                    <S.Language>BR</S.Language>
                </S.DivMode>
            </S.HeaderDiv>
        </S.Header >
    )
}
