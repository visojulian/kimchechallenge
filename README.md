# Hola! 👋
Esta es mi resolución para el
### Desafío para Software Engineers

Nombre postulante: [Julian Viso](https://www.linkedin.com/in/julian-viso/)
Link a la app en producción: [AQUI]

## Consideraciones
Antes de empezar, dejo aquí unas breves consideraciones.
En esta aplicación se establecen dos caminos distintos para realizar peticiones a la API.
Uno es el camino de [CONTINENTES](src/components/CountryByContinent.js) y el otro es el camino de [IDIOMAS](src/components/CountryByLanguage.js).
Esto se debe a mi decisión de implementar la funcionalidad de filtros por continentes que ofrece la API, la cual me pareció más apropiada para resolver consultas ordenadas por continentes, pero esta resolución no era posible a través del camino de idiomas. Por lo cual preferí establecer dos lines de trabajo distintas dentro de la misma aplicación, sólo con propósitos de estudio.
Quizás esta resolución no sea óptima, pero deja cuenta del manejo de graphql en un nivel básico.

## Paquetes
Para el desarrollo de esta aplicación se utilizaron los siguientes paquetes:

- [React](https://es.reactjs.org/)
- [Material UI](https://mui.com/)
- [ApolloClient](https://www.apollographql.com/docs/react/)
- [Lodash](https://lodash.com/)

## Comentarios finales
- Utilizar Material UI fue una decisión de tiempos. No trabajé lo suficiente con styled-components como para resvolver el challenge en un tiempo considerable.
- Intenté llevar a cabo este challenge mantiendo las buenas prácticas como gitflow y conventional commits.
- Por último, agradecer la oportunidad de resolver este desafío. Me permitió trabajar de manera intensa sobre una tecnología que aún no conocía. Espero que puedan tenerme en consideración. Saludos
