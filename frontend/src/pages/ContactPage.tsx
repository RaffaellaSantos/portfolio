import React from "react";
import PageWrapper from "../components/pageWrapper";

const ContactPage: React.FC = () => (
    <PageWrapper title="Contato">
        <ul>
            <li>
                <span className="text-lg text-gray-600">
                    <strong>Email Profissional: </strong>
                    adraffaella6@gmail.com
                </span>
            </li>
            <li>
                <span className="text-lg text-gray-600">
                    <strong>Email Institucional: </strong>
                    ardsf.eng23@uea.edu.br
                </span>
            </li>
            <li>
                <span className="text-lg text-gray-600">
                    <strong>Telefone/Whatsapp: </strong>
                    92 99317-3554
                </span>
            </li>
        </ul>
    </PageWrapper>
)

export default ContactPage