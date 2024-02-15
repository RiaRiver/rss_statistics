class Store {
  state = {};

  /**
   * Updates the state with the provided state object.
   *
   * @param {Object} state - The state object to merge with the current state
   */
  updateState(state) {
    this.state = { ...this.state, ...state };
  }

  /**
   * Set the value of a specific state property.
   *
   * @param {string} name - The name of the state property
   * @param {any} value - The value to set for the state property
   */
  setState(name, value) {
    this.state[name] = value;
  }

  /**
   * Sets the state of a collection at a given index.
   *
   * @param {string} name - The name of the collection state property
   * @param {number} index - the index of the element to be updated
   * @param {any} value - the new value to be set at the specified index
   */
  setStateOfCollection(name, index, value) {
    if (!this.state[name]) this.state[name] = {};
    this.state[name][index] = value;
  }

  /**
   * Get the state value based on the provided name,
   * or return the entire state if name is undefined.
   *
   * @param {string} name - The name of the state value to retrieve
   * @return {any} The state value corresponding to the provided name,
   * or the entire state if name is undefined
   */
  getState(name) {
    if (name !== undefined) return this.state[name];
    return this.state;
  }
}

export const store = new Store();
