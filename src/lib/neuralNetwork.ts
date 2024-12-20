import * as tf from '@tensorflow/tfjs'

export class LearningModel {
  model: tf.Sequential

  constructor() {
    this.model = tf.sequential()
    this.model.add(tf.layers.dense({ units: 64, activation: 'relu', inputShape: [10] }))
    this.model.add(tf.layers.dense({ units: 32, activation: 'relu' }))
    this.model.add(tf.layers.dense({ units: 16, activation: 'relu' }))
    this.model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }))

    this.model.compile({ optimizer: 'adam', loss: 'binaryCrossentropy', metrics: ['accuracy'] })
  }

  async train(inputs: number[][], outputs: number[]) {
    const xs = tf.tensor2d(inputs)
    const ys = tf.tensor1d(outputs)

    await this.model.fit(xs, ys, {
      epochs: 100,
      callbacks: {
        onEpochEnd: (epoch, logs) => {
          console.log(`Epoch ${epoch}: loss = ${logs?.loss}, accuracy = ${logs?.acc}`)
        }
      }
    })
  }

  predict(input: number[]) {
    const inputTensor = tf.tensor2d([input])
    const prediction = this.model.predict(inputTensor) as tf.Tensor
    return prediction.dataSync()[0]
  }
}