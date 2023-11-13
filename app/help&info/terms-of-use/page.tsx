import React from 'react'

function TermsOfUse() {
    return (
        <div>
            <div className='p-5'>
                <h1 className='font-bold text-2xl '>Terms of use.</h1>
            </div>
            <div className='flex flex-col gap-3'>
                <div className='bg-white rounded-md p-3 hover:outline outline-black outline-1 duration-150 ease-in-out'>
                    <div>

                        <section>
                            <h2>1. Use of Task Mate</h2>
                            <p>1.1 Account Creation: To use certain features of Task Mate, you may be required to create an account...</p>
                            <p>1.2 Responsibility for Account: You are responsible for maintaining the confidentiality of your account and password...</p>
                        </section>

                        <section>
                            <h2>2. User Content</h2>
                            <p>2.1 Ownership: You retain ownership of the content you create, upload, or submit while using Task Mate...</p>
                            <p>2.2 Prohibited Content: You agree not to submit any User Content that is illegal, infringing, harassing, discriminatory, or otherwise objectionable...</p>
                        </section>

                        <section>
                            <h2>3. Prohibited Conduct</h2>
                            <p>3.1 You agree not to:</p>
                            <ul>
                                <li>Use Task Mate for any illegal purpose or in violation of any local, state, national, or international law.</li>
                                <li>Interfere with or disrupt Task Mate or servers or networks connected to Task Mate.</li>
                                <li>Attempt to gain unauthorized access to other user accounts or to Task Mates systems or networks.</li>
                            </ul>
                        </section>

                        <section>
                            <h2>4. Termination</h2>
                            <p>4.1 Termination by You: You may terminate your account at any time by following the instructions on Task Mate...</p>
                            <p>4.2 Termination by Task Mate: Task Mate reserves the right to terminate or suspend your account or access to Task Mate at its sole discretion...</p>
                        </section>

                        <section>
                            <h2>5. Changes to Terms of Use</h2>
                            <p>5.1 Task Mate reserves the right to update and change these Terms of Use from time to time without notice...</p>
                            <p>Any new features that augment or enhance the current service, including the release of new tools and resources, shall be subject to these Terms...</p>
                        </section>

                        <section>
                            <h2>6. Contact Information</h2>
                            <p>If you have any questions about these Terms of Use, please contact us at <a href="mailto:contact@email.com">contact@email.com</a>.</p>
                        </section>
                    </div>
                </div >
            </div>
        </div>
    )
}

export default TermsOfUse