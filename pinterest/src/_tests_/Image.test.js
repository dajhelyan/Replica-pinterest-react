
import React from 'react'
import { Image } from '../components/Image';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'


/* test('Image component, when url is empty', () => {
  // Paso 1.
  // Paso 2.
  const url = '';
  const alt = 'alt';
  const forwardref = () => {};
  const { getByTestId } = render(<Image url={url} alt={alt} forwardref={forwardref} />)
  const defaultImageSrc = 'https://cdn2.thecatapi.com/images/8ub.jpg';

  // validaciones, testeos
  // esperas que el valor ACTUAL sea igual al ESPERADO
  // EXPECT (ACTUAL) equal to (EXPECTED)

  expect(getByTestId('image')).toHaveAttribute('src', defaultImageSrc);
  expect(getByTestId('image')).toHaveAttribute('alt', alt);
}) */

test('Image component, when url is not empty', async () => {
  // Paso 1.
  // Paso 2.
  const url = 'gato.png';
  const alt = 'alt1';
  const forwardref = () => {};
  const { getByTestId } = render(<Image url={url} alt={alt} forwardref={forwardref} />)

  expect(getByTestId('image')).toHaveAttribute('src', url);
  expect(getByTestId('image')).toHaveAttribute('alt', alt);
})