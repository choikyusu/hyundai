import { languageList, loginList } from '@/src/datas/language.data';
import { TextLink } from '../../../TopMobileArea/MobileController/TextLink/TextLink';
import { SelectButton } from '@/src/components/common/SelectBox/SelectBox';
import { RiMenu3Fill, RiSearchLine } from 'react-icons/ri';
import { Styled } from '../Login';

interface PCLoginProps {
  language: string;
  openType: '' | PCSideMenuType;
  onClickButton: (type: PCSideMenuType) => void;
  onClickType: (type: HeaderMenuType) => void;
}

export const PCLogin = ({
  language,
  openType,
  onClickButton,
  onClickType,
}: PCLoginProps) => {
  return (
    <>
      <TextLink headerType="Web" />
      <Styled.ItemUtil>
        <SelectButton list={languageList} isOpen={openType === 'Language'}>
          <Styled.SelectButton onClick={() => onClickButton('Language')}>
            {language}
          </Styled.SelectButton>
        </SelectButton>
      </Styled.ItemUtil>
      <Styled.Divide />
      <Styled.ItemUtil>
        <SelectButton list={loginList} isOpen={openType === 'Login'}>
          <Styled.LoginButton onClick={() => onClickButton('Login')} />
        </SelectButton>
      </Styled.ItemUtil>
      <Styled.ItemUtil>
        <Styled.SearchButton>
          <RiSearchLine fill="#002c5f" onClick={() => onClickType('Search')} />
        </Styled.SearchButton>
        <Styled.MenuButton onClick={() => onClickType('Menu')}>
          <RiMenu3Fill fill="#002c5f" />
        </Styled.MenuButton>
      </Styled.ItemUtil>
    </>
  );
};
