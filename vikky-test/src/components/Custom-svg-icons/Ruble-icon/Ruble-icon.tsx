import SvgIcon, {SvgIconProps} from '@mui/material/SvgIcon';
import './Ruble-icon.scss';


function RubleIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props} className="ruble-icon">
      <path fill="currentColor"
            d="M1.8 15V.72h4.56c1.84 0 3.18.373 4.02 1.12.853.747 1.28 1.773 1.28 3.08 0 .773-.173 1.5-.52 2.18-.347.68-.927 1.227-1.74 1.64-.8.413-1.893.62-3.28.62h-1.3V15H1.8ZM.2 12.86v-1.94h7.7v1.94H.2Zm0-3.5V6.88h5.86v2.48H.2Zm5.62-2.48c.573 0 1.067-.06 1.48-.18.413-.133.733-.34.96-.62.227-.28.34-.633.34-1.06 0-.613-.193-1.067-.58-1.36-.387-.307-.993-.46-1.82-.46H4.82v3.68h1Z"/>
    </SvgIcon>
  );
}

export {RubleIcon};
