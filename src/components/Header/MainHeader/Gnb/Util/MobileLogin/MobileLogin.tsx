import { SelectButton } from '@/src/components/common/SelectBox/SelectBox';
import { languageList, loginList } from '@/src/datas/language.data';
import { Styled } from '../Util';

interface MobileLoginProps {
  language: string;
  openType: '' | PCSideMenuType;
  onClickButton: (type: PCSideMenuType) => void;
}

export const MobileLogin = ({
  language,
  openType,
  onClickButton,
}: MobileLoginProps) => {
  return (
    <>
      {loginList.map((login, index) => (
        <Styled.ItemUtil key={index}>
          <Styled.MobileLoginButton href={login.pageUrl} title={login.name}>
            {login.name}
          </Styled.MobileLoginButton>
        </Styled.ItemUtil>
      ))}
      <Styled.ItemUtil>
        <SelectButton list={languageList} isOpen={openType === 'Language'}>
          <Styled.SelectButton onClick={() => onClickButton('Language')}>
            {language}
          </Styled.SelectButton>
        </SelectButton>
      </Styled.ItemUtil>
    </>
  );
};
