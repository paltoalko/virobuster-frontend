import { Box, Typography } from '@mui/material';
import React from 'react';
import styles from '../assets/styles/FAQ.module.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Iprops {
  title: string;
  description: string;
}

const FAQItem: React.FC<Iprops> = ({ title, description }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography component={'span'} variant="body1" fontWeight={400}>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography component={'span'} variant="body2" fontWeight={300}>
          {description}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

const FAQ: React.FC<{}> = () => {
  return (
    <Box className={styles.faqContainer}>
      <Typography
        variant="h4"
        color="primary"
        fontWeight={200}
        className={styles.header}
      >
        FAQ
      </Typography>
      <Box className={styles.listContainer}>
        <Accordion sx={{ backgroundColor: '#F2F2F2' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography component={'span'} variant="h5" fontWeight={400}>
              Ogólne
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FAQItem
              title="Ile urządzeń jest mi potrzebnych?"
              description="Ogólna zasada brzmi: Jedno urządzenie na pokój z maksymalnie 20 osobami lub o powierzchni do 180 m². Chętnie doradzimy, jak optymalnie wyposażyć pomieszczenia i ile urządzeń jest potrzebnych."
            />
            <FAQItem
              title="Jak często należy serwisować urządzenie?"
              description="Ponieważ urządzenia VIROBUSTER nie wymagają wymiany filtra, wystarczy je serwisować co 9000 godzin pracy - oznacza w praktyce od 2 do 5 lat."
            />
            <FAQItem
              title="Czy urządzenie trzeba zamontować?"
              description="Urządzenie jest przez nas skonfigurowane gotowe do pracy i potrzebuje jedynie gniazdka. Lokalizację można zmienić w dowolnym momencie."
            />
            <FAQItem
              title="Czy technologia została wystarczająco przetestowana?"
              description="Urządzenia VIROBUSTER zostały opracowane do użytku profesjonalnego i są używane od 2003 roku m.in. był stosowany w wielu szpitalach i zakładach spożywczych. Skuteczność została potwierdzona wielokrotnymi badaniami."
            />
            <FAQItem
              title="Jak długo istnieje VIROBUSTER?"
              description="Firma została założona w 2003 roku w odpowiedzi na pandemię SARS/H5N1, a później H1N1, aby oferować placówkom medycznym niezawodną dezynfekcję powietrza w pomieszczeniach. Korzystasz z tej przewagi wiedzy na każdym urządzeniu."
            />
            <FAQItem
              title="Dlaczego urządzenie kosztuje więcej niż wiele innych urządzeń?"
              description="Jeśli chodzi o koszty, cena zakupu to tylko jeden czynnik. Przywiązujemy dużą wagę do tego, że większość wysokiej jakości materiałów pochodziła od dostawców z Niemiec.Dzięki temu urządzenia VIROBUSTER są bardzo trwałe. Działają również bez wymiennego filtra - to znacznie obniża koszty konserwacji. Ogólnie rzecz biorąc, urządzenia VIROBUSTER są opłacalne przez kilka lat."
            />

            <FAQItem
              title="Czy są jakieś inne koszty poza kosztami akwizycji?"
              description="Główną zaletą technologii UVC jest to, że nie trzeba kupować materiałów eksploatacyjnych, takich jak filtry. Koszty konserwacji są również bardzo niskie, ponieważ konserwacja jest wymagana tylko co 2 do 5 lat. Konserwacja zwykle kosztuje od 650 do 700 euro. Chętnie przedstawimy Ci ofertę na konserwację Twoich urządzeń."
            />
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ backgroundColor: '#F2F2F2' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography component={'span'} variant="h5" fontWeight={400}>
              Technologia
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component={'span'}>
              <FAQItem
                title="Jaką technologię wykorzystuje urządzenie do oczyszczania powietrza?"
                description="Wszystkie urządzenia VIROBUSTER opierają się na opatentowanej technologii UVPE. Powietrze w pomieszczeniu jest uzdatniane w systemie zamkniętym skoncentrowanym promieniowaniem UVC - dodatkowo wielokrotnie wzmacnianym przez reflektory. Promieniowanie to zapewnia, że DNA/RNA mikroorganizmów, takich jak wirusy i bakterie, jest tak uszkodzone, że nie mogą się już rozmnażać - rozprzestrzenianie się choroby jest wtedy niemożliwe. W jednym przejściu 99,99% mikroorganizmów jest w ten sposób dezaktywowanych."
              />
              <FAQItem
                title="Czy eliminowane są tylko wirusy koronowe?"
                description="Intensywne światło UVC dezaktywuje 99,99% wszystkich żywych mikroorganizmów - czyli wszystkich wirusów, ale także bakterii i grzybów. Dzięki temu urządzenia VIROBUSTER chronią również przed innymi chorobami zakaźnymi, takimi jak m.in. B. grypa - lub z niektórych alergii."
              />
              <FAQItem
                title="Jaka jest różnica między sterylizacją a oczyszczaniem powietrza?"
                description="Konwencjonalne oczyszczanie powietrza opiera się na filtrach filtrujących i zbierających drobne cząstki z powietrza. Oczyszczanie powietrza dezaktywuje wirusy, bakterie i inne mikroorganizmy bez ich wychwytywania."
              />
              <FAQItem
                title="Dezynfekcja powietrza UVC a oczyszczacze/filtry powietrza HEPA - jakie są zalety i wady?"
                description="Siła technologii filtrujących polega na tym, że filtrują one kurz i inne cząsteczki z powietrza. Im drobniejsze cząstki, tym mniej skuteczne są filtry. Im gęstsze filtry, tym wolniejsza prędkość przepływu powietrza przez urządzenie. Ponadto filtry muszą być regularnie wymieniane w stosunkowo krótkich odstępach czasu. A ponieważ zawierają skoncentrowane ilości zakaźnych wirusów, jest to możliwe tylko w pełnej odzieży ochronnej.Napromienianie promieniami UVC jest skierowane w szczególności na organizmy żywe w powietrzu. Nie skupiamy się na kurzu i zapachach. Również tutaj urządzenia VIROBUSTER mają pozytywny wpływ dzięki pozbawionemu turbulencji przepływowi powietrza."
              />
              <FAQItem
                title="Czy istnieją różnice w wydajności między różnymi systemami na rynku?"
                description="Dwie najważniejsze cechy skuteczności w walce z koronawirusem to odsetek wirusów, które są filtrowane lub dezaktywowane, oraz ilość powietrza, które można oczyścić w określonym czasie. Urządzenia VIROBUSTER osiągają maksymalne wartości dla obu charakterystyk, które wyraźnie przewyższają konwencjonalne technologie filtracyjne."
              />
              <FAQItem
                title="Która technologia najlepiej nadaje się do ochrony przed koroną?"
                description="W przypadku konwencjonalnych oczyszczaczy powietrza z filtrami HEPA lub innymi wirusy są wyłapywane żywcem - filtry można wtedy wymienić tylko za pomocą kompletnej odzieży ochronnej. UVC nie tylko zbiera wirusy, ale je dezaktywuje. Jednocześnie technologia ta oczyszcza znacznie większe ilości powietrza - dzięki czemu pomieszczenia są szybciej całkowicie dezynfekowane. Ponadto systemy filtrujące muszą być w ciągłym działaniu, aby uniknąć zanieczyszczenia pomieszczenia, podczas gdy systemy ze światłem UVC można włączać i wyłączać w zależności od potrzeb."
              />
              <FAQItem
                title="Czy dezynfekcja powietrza UVC reguluje również zawartość CO2 w pomieszczeniu?"
                description="Dezynfekcja UVC nie wpływa na zawartość CO2. W tym celu nadal wymagana jest wentylacja. Jednak po wentylacji tlen jest lepiej rozprowadzany, dzięki czemu zawartość CO2 rośnie ponownie znacznie wolniej."
              />
              <FAQItem
                title="Czy istnieją dowody na to, że technologia działa?"
                description="Naświetlanie światłem UVC jest stosowane do dezynfekcji od początku XX wieku – m.in. B. w uzdatnianiu wody pitnej. Technologia UVPE VIROBUSTER jeszcze bardziej udoskonala ten proces - w zamkniętej jednostce, która wykorzystuje reflektory, aby uzyskać równomierne, bardzo intensywne napromieniowanie całej objętości powietrza.

          Skuteczność została potwierdzona w różnych badaniach i procesach certyfikacji. W powtórnych testach w latach 2006, 2011, 2013, 2020 i 2021 Hygieneinstitut Biotec GmbH doszedł do wniosku, że 99,99% żywych mikroorganizmów zawartych w powietrzu jest już inaktywowanych w pierwszym przebiegu. Instytut Fraunhofera Fizyki Budowlanej IBP również wyraźnie wykazał wydajność pomieszczeń w 2021 roku.
          
          Kolejnym ważnym dowodem jest kilka tysięcy urządzeń VIROBUSTER, które są z powodzeniem stosowane od 2003 roku, szczególnie w wymagających środowiskach, takich jak szpitale i przemysł spożywczy."
              />
              <FAQItem
                title="Wszelkie inne przepisy dotyczące higieny, takie jak m.in. B. wymóg maski czy regulacja odległości?"
                description="Korzystanie z VIROBUSTER nie ma wpływu na regulacje i przepisy dotyczące zachowań sprzyjających pandemii. Jednak korzystanie z technologii zapewnia bezpieczeństwo wszystkim w biurze, gdy przepisy przestają obowiązywać."
              />
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ backgroundColor: '#F2F2F2' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography component={'span'} variant="h5" fontWeight={400}>
              Urządzenie
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component={'span'}>
              <FAQItem
                title="Jak duże i ciężkie jest urządzenie?"
                description="Podstawa ma wymiary 54 cm x 54 cm, urządzenie ma 164 m wysokości i waży 39 kg. Nadal można go łatwo przenosić za pomocą zintegrowanych kółek i uchwytu."
              />
              <FAQItem
                title="Jak głośne jest urządzenie?"
                description="Urządzenia VIROBUSTER nie muszą przeciskać powietrza przez szczelne filtry, dzięki czemu pracują stosunkowo cicho. Na najniższym poziomie wentylatora (150 m³ powietrza na godzinę) generują 29,4 dB(A), na najwyższym (450 m³ powietrza na godzinę) 53,9 dB(A), podczas normalnej pracy 40 dB(A)."
              />
              <FAQItem title="Jaki jest pobór mocy?" description="240 watów" />
              <FAQItem
                title="Czy urządzenie musi znajdować się w określonej pozycji w pomieszczeniu?"
                description="Aby uzyskać optymalną oszczędność miejsca, urządzenie powinno być umieszczone w jednym rogu pomieszczenia i po przekątnej do przeciwległego rogu."
              />
              <FAQItem
                title="Czy w jednym pomieszczeniu można obsługiwać kilka urządzeń?"
                description="Praca kilku urządzeń w jednym pomieszczeniu jest możliwa, ale zazwyczaj nie jest konieczna. W zależności od wielkości pomieszczenia, charakteru pomieszczenia i liczby osób, korzystne może być ustawienie kilku urządzeń."
              />
              <FAQItem
                title="Czy ludzie mogą przebywać w pomieszczeniu w tym samym czasie, kiedy jest on używany?"
                description="Urządzenia VIROBUSTER są specjalnie zaprojektowane, aby bezproblemowo wpasować się w codzienną pracę. Wszyscy ludzie w pokoju mogą normalnie się poruszać i pozostać tam, gdzie chcą."
              />
              <FAQItem
                title="Czy jest to skomplikowane w użyciu?"
                description="Sterowanie odbywa się za pomocą prostego kontrolera. Ciągle wybierasz pożądaną ilość powietrza - od 150 do 450 m³ powietrza na godzinę. Z reguły ilość powietrza w pomieszczeniu jest ustawiana raz i nie zmienia się ponownie."
              />
              <FAQItem
                title="Czy urządzenie musi być włączone na stałe?"
                description="Jedną z zalet technologii UVC jest to, że należy ją włączać tylko wtedy, gdy jest to potrzebne. Włączenie zapewnia sprzątanie pomieszczenia. Nie jest to absolutnie konieczne, ale zaletą jest krótki czas wybiegu (ok. 15-30 minut) urządzenia po zajęciu pokoju. Gwarantuje to, w miarę możliwości, brak koncentracji wirusa w pomieszczeniu."
              />
              <FAQItem
                title="Czy okna w pokoju mogą być otwarte w tym samym czasie, gdy urządzenie pracuje?"
                description="Otwarcie okna podczas pracy urządzenia jest łatwe. W rzeczywistości przepływ powietrza przez wentylację pomaga rozrzedzać powietrze w pomieszczeniu, a także pomaga regulować poziom CO2 w pomieszczeniu."
              />
              <FAQItem
                title="Gdzie jest wykonane urządzenie?"
                description="Wszystkie urządzenia VIROBUSTER są produkowane w Niemczech - mobilne urządzenia wolnostojące produkowane są wyłącznie w zakładzie Windhagen w Nadrenii-Palatynacie. Tylko w ten sposób możemy zagwarantować jakość naszych urządzeń."
              />
              <FAQItem
                title="Czy urządzenie wskazuje, że wymagana jest konserwacja?"
                description="Urządzenie VIROBUSTER posiada diodę LED, która wyświetla stan pracy urządzenia i zapowiada konserwację w odpowiednim czasie. Osiągnięcie maksymalnej liczby godzin pracy sygnalizowane jest świeceniem czerwonej diody LED i sygnałem ostrzegawczym."
              />
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ backgroundColor: '#F2F2F2' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography component={'span'} variant="h5" fontWeight={400}>
              Bezpieczeństwo i zdrowie
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FAQItem
              title="Czy powietrze traktowane światłem UVC jest szkodliwe dla zdrowia?"
              description="Technologia UVPE jest bardzo przyjazna dla środowiska - bez ozonu i innych chemikaliów oraz bez jonizacji powietrza. Dlatego oczyszczone powietrze jest nieszkodliwe dla środowiska i zdrowia."
            />
            <FAQItem
              title="Czy światło UVC jest niebezpieczne?"
              description="Niechroniona ekspozycja na światło UVC jest niebezpieczna dla oczu i skóry. Dlatego VIROBUSTER opiera się na bezpiecznej technologii, w której UVC jest używane tylko w zamkniętym systemie. Inspekcja jest częścią certyfikacji TÜV."
            />
            <FAQItem
              title="Czy mój układ odpornościowy zostanie osłabiony, jeśli pozostanę tylko w środowisku wolnym od zarazków?"
              description="nie Układ odpornościowy człowieka jest wzmacniany głównie poprzez przyjmowanie w diecie witamin i błonnika – choć oczywiście ważna jest również skuteczna walka z infekcjami."
            />
            <FAQItem
              title="Czy bezpieczeństwo urządzenia może potwierdzić producent?"
              description="Wszystkie urządzenia VIROBUSTER są testowane przez TÜV i zgodne z CE."
            />
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default FAQ;
