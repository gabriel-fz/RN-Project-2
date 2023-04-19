import logoImg from '@assets/logo.png';

import { Container, Logo, BackIcon, BackButton } from './styles';

interface HeaderProps {
  showBackButton?: boolean;
}

export function Header ({ showBackButton = false }: HeaderProps) {
  return (
    <Container>
      {
        showBackButton && (
          <BackButton>
            <BackIcon />
          </BackButton>
        )
      }

      <Logo source={logoImg} />
    </Container>
  )
}