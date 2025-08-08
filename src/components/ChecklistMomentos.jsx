import React from "react";

const momentos = [
  { id: "humor", label: "Humor alterado" },
  { id: "pensamento", label: "Alteração do pensamento" },
  { id: "julgamento", label: "Comprometimento do julgamento" },
  { id: "orientacao", label: "Desorientação" },
  { id: "memoria", label: "Alteração de memória" },
  { id: "atencao", label: "Déficit de atenção" },
  { id: "delirio", label: "Delírio" },
  { id: "alucinacao", label: "Alucinação" },
  { id: "ideacaoSuicida", label: "Ideação suicida" },
  { id: "impulsividade", label: "Impulsividade" },
];

export default function ChecklistMomentos({ valores, setValores }) {
  function handleChange(e) {
    setValores({
      ...valores,
      [e.target.name]: e.target.checked,
    });
  }

  return (
    <fieldset>
      <legend>Momentos Psiquiátricos</legend>
      {momentos.map((momento) => (
        <label key={momento.id} style={{ display: "block", marginBottom: "0.4em" }}>
          <input
            type="checkbox"
            name={momento.id}
            checked={!!valores[momento.id]}
            onChange={handleChange}
          />
          {momento.label}
        </label>
      ))}
    </fieldset>
  );
}