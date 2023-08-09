import React from 'react'
import "../Style/Faq.css"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const Faq = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
}, [])
  return (
    <div className='mainFaq'>
        <div className='faq' data-aos="zoom-in">
            <h1> Frequently Asked Questions (FAQs)</h1>
        </div>
        <div className='faqCon' data-aos="zoom-in">
          <details>
            <summary>1. What is the best time to visit Dubai? </summary>
            <p>The best time to visit Dubai is during the winter months, from November to March, when the weather is pleasant and ideal for outdoor activities.</p>
          </details>
          <details>
            <summary> 2. Do I need a visa to visit Dubai?</summary>
            <p>Yes, most visitors require a visa to enter Dubai. The specific visa requirements depend on your nationality. It is recommended to check with the nearest UAE embassy or consulate for the latest visa information.</p>
          </details>
          <details>
            <summary>3. What is the currency used in Dubai? </summary>
            <p>The currency used in Dubai is the UAE Dirham (AED). It is advisable to have some local currency for your expenses, but credit cards are widely accepted.</p>
          </details><details>
            <summary>4. Can I drink alcohol in Dubai? </summary>
            <p>Alcohol consumption is allowed in licensed venues such as hotels, restaurants, and bars. However, it is important to respect the local customs and avoid public intoxication.</p>
          </details><details>
            <summary> 5. Is Dubai a safe city for tourists?</summary>
            <p>Dubai is considered a safe city for tourists. The authorities take security measures seriously, and the crime rate is relatively low. However, it is always advisable to exercise caution and take necessary precautions.</p>
          </details><details>
            <summary> 6. What are the must-visit attractions in Dubai?</summary>
            <p>Some of the must-visit attractions in Dubai include Burj Khalifa, Palm Jumeirah, Dubai Mall, Dubai Creek, Jumeirah Mosque, and the historic Al Fahidi neighborhood.</p>
          </details><details>
            <summary>7. Can I go on a desert safari in Dubai? </summary>
            <p>Yes, Dubai offers exciting desert safari experiences, where you can enjoy activities like dune bashing, camel riding, sandboarding, and traditional entertainment like belly dancing and henna painting.</p>
          </details><details>
            <summary>8. What is the dress code in Dubai? </summary>
            <p>While Dubai is relatively liberal, it is respectful to dress modestly in public areas, particularly in religious sites. Revealing or offensive clothing may not be appropriate and can be considered disrespectful.</p>
          </details><details>
            <summary>9. Are there any cultural customs or etiquette to be aware of? </summary>
            <p>It is important to respect local customs and traditions. Avoid public displays of affection, dress modestly, and be mindful of local sensitivities and practices.</p>
          </details><details>
            <summary>10. Can I use my mobile phone and access the internet in Dubai? </summary>
            <p>Yes, you can use your mobile phone and access the internet in Dubai. The city has excellent network coverage and offers various options for SIM cards and mobile data packages.</p>
          </details>
        </div>
    </div>
  )
}

export default Faq