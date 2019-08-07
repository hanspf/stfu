export default function ({ get, set, trigger }) {
  return <div class="modal">
    <a class="modal-close fa fa-2x fa-close" onClick={() => set('route', 'home')}/>
    <h1>Error!</h1>

    Det har skjedd en fryktelig feil inne i koden:
    <p class="darn">
      {get('error')}
    </p>

    <div class="kode">
      Prøv å logg inn/ut:<br/>
      <button type="button" onClick={() => trigger('logout')}>Logg ut</button>
    </div>
  </div>;
}
