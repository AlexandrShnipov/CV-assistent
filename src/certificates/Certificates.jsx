import s from './Certificates.module.css';

export const Certificates = (props) => {

  const {certificatesTitle, certificates} = props.currentState

  return (
    <section className={s.certificates}>
      <h2>{certificatesTitle}</h2>
      <div className={s.certificatesBlock}>
        {certificates.map((el, i) => (
          <ul className={s.certificatesList}>
            <li className={s.certificatesListItem}>
              <h3 className={s.certificatesListItemTitle}><a href={el.link} title={'click me'}>{el.organization}<strong>{el.name}</strong></a></h3>
              <data className={s.educationListItemData}><strong>{el.dateTitle}:</strong> {el.date}</data>
            </li>
          </ul>

        ))}
      </div>

    </section>
  );
};