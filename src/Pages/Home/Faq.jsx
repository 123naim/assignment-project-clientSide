

const Faq = () => {
    return (
        <div className="mt-20">
            <div>
                <h2 className="text-3xl font-bold text-black mb-6">FAQ</h2>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                How do I submit an assignment?
                </div>
                <div className="collapse-content">
                    <p>To submit an assignment, log in to your account and navigate to the Submit Assignment section. Follow the on-screen instructions to upload your file and complete the submission process.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 my-8">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                Can I edit my created assignment?
                </div>
                <div className="collapse-content">
                    <p>Once an assignment is submitted, editing is not allowed. Please double-check your work before submitting. If you have a critical update, contact your instructor for guidance.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-8">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                How can I reset my password?
                </div>
                <div className="collapse-content">
                    <p>To reset your password, go to the login page and click on the Forgot Password link. Follow the instructions sent to your registered email to create a new password.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                How do I enroll in a course?
                </div>
                <div className="collapse-content">
                    <p>To enroll in a course, log in to your account, browse the available courses, and click on the Enroll button for the desired course. Follow the on-screen instructions to complete the enrollment process.</p>
                </div>
            </div>
        </div>
    );
};

export default Faq;