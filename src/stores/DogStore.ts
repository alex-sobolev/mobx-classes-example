import { makeAutoObservable } from 'mobx';

const dogPath = 'https://dog.ceo/api/breeds/image/random';

export interface IDogStore {
  dogSrc: string;
  fetching: boolean;
  error: string | null;
  fetchDog: () => Promise<void>;
}

export class DogStore implements IDogStore {
  dogSrc = '';
  fetching = false;
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchDog() {
    try {
      this.fetching = true;

      const response = await fetch(dogPath);
      const data = await response.json();

      this.fetching = false;
      this.error = null;
      this.dogSrc = data.message;
    } catch (err) {
      this.fetching = false;
      this.error = err;
      this.dogSrc = '';
    }
  }
}
