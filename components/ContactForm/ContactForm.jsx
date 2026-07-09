'use client'

import { useState } from 'react'
import styles from './ContactForm.module.css'

export default function ContactForm() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const [status, setStatus] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
      e.preventDefault()
      setStatus('sending')
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        })
        if (!res.ok) throw new Error()
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus(''), 5000)
      } catch {
        setStatus('error')
      }
    }

    
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            {status === 'success' && (
                <div className={styles.successMessage}>
                    ✅ Message envoyé avec succès ! Je vous répondrai bientôt.
                </div>
            )}
        <div className={styles.formGroup}>
          <label htmlFor="name">Nom</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea 
            id="message" 
            name="message" 
            rows="5" 
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" 
            className={styles.submitBtn}
            disabled={status === 'sending'}
            >
                {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
        </button>
      </form>
    )
  }

  