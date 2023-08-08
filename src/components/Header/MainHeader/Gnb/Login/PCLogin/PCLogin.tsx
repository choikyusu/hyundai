import { languageList } from '@/src/datas/language.data';
import { TextLink } from '../../../TopMobileArea/MobileController/TextLink/TextLink';
import { SelectButton } from '@/src/components/common/SelectBox/SelectBox';
import { RiMenu3Fill, RiSearchLine } from 'react-icons/ri';
import { Styled } from '../Login';

interface PCLoginProps {
  language: string;
  isOpen: boolean;
  onClickLanguage: () => void;
  onClickType: (type: HeaderMenuType) => void;
}

export const PCLogin = ({
  language,
  isOpen,
  onClickLanguage,
  onClickType,
}: PCLoginProps) => {
  return (
    <>
      <TextLink headerType="Web" />
      <Styled.ItemUtil>
        <SelectButton
          selectedItem={language}
          list={languageList}
          isOpen={isOpen}
          onClick={onClickLanguage}
        />
      </Styled.ItemUtil>
      <Styled.Divide />
      <Styled.LoginButton />
      <Styled.ItemUtil>
        <Styled.SearchButton>
          <RiSearchLine fill="#002c5f" />
        </Styled.SearchButton>
        <Styled.MenuButton onClick={() => onClickType('Menu')}>
          <RiMenu3Fill fill="#002c5f" />
        </Styled.MenuButton>
      </Styled.ItemUtil>
    </>
  );
};
