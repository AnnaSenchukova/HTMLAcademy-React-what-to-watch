import {ReactElement} from 'react';

import {Footer} from '../../components/Footer';

export function Page404(): ReactElement {
  return (
    <section className="user-page page-content">
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} className='user-page__content'>
        <div style={{textAlign: 'center'}}>
          <h1 className="page-title">404 Not Found</h1>
          <p style={{fontSize: '22px', lineHeight: '26px'}}>We can’t searching this page <br /> but we&apos;ll be back. To be continue...</p>
        </div>
      </div>
      <Footer />
    </section>
  );
}
