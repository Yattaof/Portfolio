import styles from './myWork.module.scss';
import Slider from './ImagesOfMyWork/Images';

function MyWork() {
	const efektImages = [
		'/public/images/efekt1/efekt1.png',
		'/public/images/efekt1/efekt2.png',
		'/public/images/efekt1/efekt3.png',
		'/public/images/efekt1/efekt4.png',
	];
	const amImages = [
		'/public/images/uslugiAM/am1.png',
		'/public/images/uslugiAM/am2.png',
		'/public/images/uslugiAM/am3.png',
		'/public/images/uslugiAM/am4.png',
		'/public/images/uslugiAM/am5.png',
		'/public/images/uslugiAM/am6.png',
		'/public/images/uslugiAM/am7.png',
	];
	const feniksImages = [
		'/public/images/biuroFeniks/feniks1.png',
		'/public/images/biuroFeniks/feniks2.png',
		'/public/images/biuroFeniks/feniks3.png',
		'/public/images/biuroFeniks/feniks4.png',
		'/public/images/biuroFeniks/feniks5.png',
		'/public/images/biuroFeniks/feniks6.png',
	];
	const scuImages = [
		'/public/images/scu/scu1.png',
		'/public/images/scu/scu2.png',
		'/public/images/scu/scu3.png',
		'/public/images/scu/scu4.png',
		'/public/images/scu/scu5.png',
	];

	return (
		<div className={styles.workContainer}>
			<div className={styles.odd}>
				<div className={styles.websiteImage}>
					<Slider images={efektImages} name='Ubezpieczenia Efekt' />
				</div>
				<div className={styles.websiteDescription}>
					<a href='https://efekt1.com/' target='_blank' rel='noopener'>
						<h2>Ubezpieczenia EFEKTs.c.</h2>
					</a>
					<p>
						Pierwszy projekt wykonany w oparciu o HTML, Scss oraz JavaScript.
						Strona jest prostą stroną gdzie wszystkie informacje znajdziemy na
						stronie głównej w tym między innymi: opis firmy, ofertę, informacje
						kontaktowe czy pomocne w razie potrzeby dokumenty które można pobrać
						bezpośrednio ze strony firmy. W celu zaoszczędzenia czasu strona
						wykorzystuje Bootstrap który posłużył do stworzenia nawigacji oraz
						"offcanvas" w wersji moblinej. Został tutaj zaimplementowany
						dokument php który obsługuje wysyłanie treści formularza na wskazany
						adres, walidacja oraz cała funkcjonalność strony stoi jednak po
						stronie JS. Na stronie znajdziemy kilka animacji które pozytywnie
						wpływają na UX. Z racji na fakt iż domena znajduje się u innego
						dostawcy co hosting, potrzebna była zmiana DNS. Logo firmy zostało
						zaprojektowane i wykonane przeze mnie w programie Adobe Ilustrator.
					</p>
					<div className={styles.technologies}>
						<p className={styles.firstText}>Użyte technologie:</p>
						<div className={styles.logos}>
							<img src='/images/html.png' alt='Logo języka znaczników "Html"' title='HTML'/>
							<img src='/images/sass.png' alt='Logo preprocesora css "Sass"' title='SaSS'/>
							<img
								src='/images/js.png'
								alt='Logo języka programowania "JavaScript"'
								title='JavaScript'
							/>
							<img
								className={styles.php}
								src='/images/php.png'
								alt='Logo języka programowania "Php"'
								title='Php'
							/>
							<img
								src='/images/bootstrap.png'
								alt='Logo frameworka css "Bootstrap"'
								title='BootStrap'
							/>
							<img src='/images/npm.png' alt='Logo menadżera pakietów "Npm"' title='Npm'/>
							<img
								src='/images/gulp.png'
								alt='Logo zestawu narzędzi do budowania apliakcji js "Gulp"'
								title='Gulp'
							/>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.even}>
				<div className={styles.websiteImage}>
					<Slider images={amImages} name='Uslugi Budowlane AM' />
				</div>
				<div className={styles.websiteDescription}>
					<a
						href='https://uslugibudowlaneam.pl/'
						target='_blank'
						rel='noopener'
					>
						<h2>Usługi Budowlane AM</h2>
					</a>
					<p>
						Kolejny z projektów zbudowany oraz zaprojektowany w całości przeze
						mnie, wszelkie szczegóły projektu zostały uzgodnione z klientem. Na
						stronie znalazły się szczegółowe informacje firmy i wykonywanych
						usług. Na podstronie umiejscowiona została galeria zdjęć wykonanych
						projektów przez firmę AM, które zostały poddane przeze mnie lekkiej
						obróbce w programie Adobe Photoshop. Strona wykonana w oparciu o
						HTML, Scss, JavaScript oraz php który ponownie pełni funkcję obłsugi
						wysyłania treści formularza na wskazany adres. Kod strony został
						zminifikowany i zaimportowany na hosting wybrany przez klienta z
						moją wcześniejszą pomocą przy wyborze. Tak jak w przypadku projektu
						dla firmy EFEKT logo zostało również wykonane i zaprojektowane
						przeze mnie przy użyciu programu Adobe Ilustrator.
					</p>
					<div className={styles.technologies}>
						<p className={styles.firstText}>Użyte technologie:</p>
						<div className={styles.logos}>
							<img src='/images/html.png' alt='Logo języka znaczników "Html"' title='HTML'/>
							<img src='/images/sass.png' alt='Logo preprocesora css "Sass"' title='SaSS'/>
							<img
								src='/images/js.png'
								alt='Logo języka programowania "JavaScript"'
								title='JavaScript'
							/>
							<img
								className={styles.php}
								src='/images/php.png'
								alt='Logo języka programowania "Php"'
								title='Php'
							/>
							<img src='/images/npm.png' alt='Logo menadżera pakietów "Npm"' title='Npm'/>
							<img
								src='/images/gulp.png'
								alt='Logo zestawu narzędzi do budowania apliakcji js "Gulp"'
								title='Gulp'
							/>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.odd}>
				<div className={styles.websiteImage}>
					<Slider images={feniksImages} name='Kancelaria rachunkowa Feniks' />
				</div>
				<div className={styles.websiteDescription}>
					<a
						href='https://biuro-rachunkowe-feniks.pl/'
						target='_blank'
						rel='noopener'
					>
						<h2>Biuro rachunkowe FENIKS</h2>
					</a>
					<p>
						Kolejny projekt wykonany za pomocą Wordpress, ponieważ to w tej
						technologi stawiałem swoje pierwsze kroki frontend'owe. Projekt z
						własnym design'em, zaplanowano tutaj każdą sekcję które były
						wcześniej uzgodnione z klientem. Na stronie znajdziemy ofertę
						kanelarii rachunkowej, oraz dwa formularze które kolejno służą do
						wyceny oraz kontaktu klienta z firmą. Nie zapomniano o alercie
						przypominającym o wykorzystywaniu ciasteczek przez stronę. Została
						również stworzona strefa klienta gdzie mają się znaleźć posty z
						aktualnościami podatkowymi które firma FENIKS może nabierząco
						dodawać korzystając ze swojego konta edytorskiego w panelu
						administratora.
					</p>
					<div className={styles.technologies}>
						<p className={styles.firstText}>Użyte technologie:</p>
						<div className={styles.logos}>
							<img
								src='/images/wp.png'
								alt='System zarządzania treścią Cms "Wordpress"'
								title='WordPress'
							/>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.even}>
				<div className={styles.websiteImage}>
					<Slider images={scuImages} name='Śląskie Centrum Ubezpieczeń' />
				</div>
				<div className={styles.websiteDescription}>
					<a href='https://scu.pl/' target='_blank' rel='noopener'>
						<h2>Śląskie Centrum Ubezpieczeń</h2>
					</a>
					<p>
						Jeden z pierwszych projektów komercyjnych. Wykonany został w całości
						za pomocą Wordpress z wykorzystaniem kilku wtyczek między innymi
						Elementor i WP fluent forms. Projekt był wykonany w zespole o nazwie
						PetitPixel. Na stronie zadbano o wszystkie szczegóły i wprowadzono
						wszelkie poprawki które na bieżąco klient chciał zmieniać. Strona
						jest typową stroną wizytówkową która spełnia rolę informacyjną dla
						użytkownika. Znajdują się na niej wszelkie ważne informacje
						dotyczące samej firmy "Scu" oraz zakres ich oferty. Strona została
						wykonana na podstawie mockup'u który został nam wcześniej
						dostarczony, dlatego w tym przypadku design pozsotaje po stronie
						klienta. Na podstronie kontakt znalazł się formularz który
						wykorzystuje wtyczkę do obsługi "reCAPTCHA".
					</p>
					<div className={styles.technologies}>
						<p className={styles.firstText}>Użyte technologie:</p>
						<div className={styles.logos}>
							<img
								src='/images/wp.png'
								alt='System zarządzania treścią Cms "Wordpress"'
								title='WordPres'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MyWork;
