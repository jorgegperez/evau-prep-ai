""" Pydantic models for exercises service. """

import os
import json
from enum import Enum
from typing import Optional
from langchain.prompts import PromptTemplate
from langchain.chat_models import ChatOpenAI
from langchain.chains import LLMChain
from pydantic import BaseModel, Field
from resources.objectid import PydanticObjectId
from resources.exercise.prompts.word_ordering_prompt import WORD_ORDERING_PROMPT


class EExerciseType(Enum):
    WORD_ORDERING = "WORD_ORDERING"
    WORD_COMPLETION = "WORD_COMPLETION"


class Exercise(BaseModel):
    """
    Exercise model
    """
    id: Optional[PydanticObjectId] = Field(None, alias="_id")
    type: EExerciseType
    statement: str
    solution: str

    def to_json(self):
        """
        Convert model to json
        """
        return self.model_dump_json(exclude_unset=True)

    def to_bson(self):
        """
        Convert model to bson
        """
        return self.model_dump(exclude_unset=True)


class ExerciseService:
    """
    Exercise service
    """
    def __init__(self):
        # self.db = db
        # self.collection = db.exercises
        pass

    def get_exercise(self, exercise_id):
        """
        Get exercise by id
        :param exercise_id: str
        """
        pass
        # return self.collection.find_one({"_id": exercise_id})

    def create_exercise(self, exerciseType: EExerciseType):
        """
        Create exercise
        :param exerciseType: EExerciseType
        """
        if exerciseType == EExerciseType.WORD_ORDERING.value:
            prompt = PromptTemplate(input_variables=["context"], template=WORD_ORDERING_PROMPT)
            chain = LLMChain(prompt=prompt, llm=ChatOpenAI(
                         openai_api_key=os.environ.get('OPENAI_API_KEY'),
                         model='gpt-4',
                         temperature=0.7,
                         ))
            response = chain.run(context="""La sociedad del Antiguo Régimen continuó siendo estamental; \
            se mantenía la división de origen
medieval en estamentos: nobleza, clero y tercer estado o estamento popular. Para cumplir las
misiones encomendadas al clero rezar para la salvación de la comunidad y a la nobleza vigilar
por su defensa estos estamentos gozaban de privilegios, concedidos por ley, de tipo económico,
social y político. Todos ellos consolidados, a lo largo de la Edad Media, se mantendrán durante la
Edad Moderna.
La nobleza y el clero constituían el estamento privilegiado. El primer estamento lo formaba el clero.
En su interior había importantes diferencias lo que daba lugar a un claro escalonamiento: arzobispos,
abades, curas rurales y religiosos. La Iglesia poseía grandes propiedades de las que obtenía rentas,
no pagaba impuestos y mantenía una fuerte influencia en los comportamientos sociales matrimonio,
paternidad, enseñanza….La aristocracia en teoría constituía el segundo estamento. Su condición
de privilegiado se justificaba por su misión la defensa militar de la comunidad y la de aconsejar
a los monarcas; sin embargo, al pasar a la Edad Moderna el Estado se fortalece, la monarquía se
hace absoluta y la nobleza ve reducir su peso político, militar o administrativo. En cambio, mantiene
sus privilegios jurídicos no paga impuestos y goza de leyes propias y vive de las rentas de sus
tierras. También, una parte de ellos, los más poderosos, los que ocupan la parte alta de la nobleza
o aristocracia, disfrutan de poderes jurisdiccionales, como el cobro de impuestos, el nombramiento
de jueces o la redacción de ordenanzas para las poblaciones de su señorío.
Por último, el estamento de los no privilegiados, también conocido como tercer estado incluía a
todos los que no eran ni nobles ni clérigos. Un grupo social donde se incluían los jornaleros del
campo o los que habitaban en las ciudades, los artesanos, los comerciantes y los profesionales
liberales. Entre ellos había fuertes diferencias económicas, pero a todos les unía la obligación de
pagar impuestos, la necesidad de trabajar, y la carencia de privilegios. """)
            print(response)
            json_response = json.loads(response)
            return json_response
    
        elif exerciseType == EExerciseType.WORD_COMPLETION:
            return "WORD_COMPLETION"
        # return self.collection.insert_one(exercise.to_bson())

    def create_word_ordering(self):
        prompt = PromptTemplate(input_variables=["context"], template=WORD_ORDERING_PROMPT)
        chain = LLMChain(prompt=prompt, llm=ChatOpenAI(
                         openai_api_key=os.environ.get('OPENAI_API_KEY'),
                         model='gpt-4',
                         temperature=0.7,
                         ))
        response = chain.run(context="""La sociedad del Antiguo Régimen continuó siendo estamental; \
            se mantenía la división de origen
medieval en estamentos: nobleza, clero y tercer estado o estamento popular. Para cumplir las
misiones encomendadas al clero (rezar para la salvación de la comunidad) y a la nobleza (vigilar
por su defensa) estos estamentos gozaban de privilegios, concedidos por ley, de tipo económico,
social y político. Todos ellos consolidados, a lo largo de la Edad Media, se mantendrán durante la
Edad Moderna.
La nobleza y el clero constituían el estamento privilegiado. El primer estamento lo formaba el clero.
En su interior había importantes diferencias lo que daba lugar a un claro escalonamiento: arzobispos,
abades, curas rurales y religiosos. La Iglesia poseía grandes propiedades de las que obtenía rentas,
no pagaba impuestos y mantenía una fuerte influencia en los comportamientos sociales (matrimonio,
paternidad, enseñanza…).La aristocracia en teoría constituía el segundo estamento. Su condición
de privilegiado se justificaba por su misión (la defensa militar de la comunidad y la de aconsejar
a los monarcas); sin embargo, al pasar a la Edad Moderna el Estado se fortalece, la monarquía se
hace absoluta y la nobleza ve reducir su peso político, militar o administrativo. En cambio, mantiene
sus privilegios jurídicos (no paga impuestos y goza de leyes propias) y vive de las rentas de sus
tierras. También, una parte de ellos, los más poderosos, los que ocupan la parte alta de la nobleza
o aristocracia, disfrutan de poderes jurisdiccionales, como el cobro de impuestos, el nombramiento
de jueces o la redacción de ordenanzas para las poblaciones de su señorío.
Por último, el estamento de los no privilegiados, también conocido como tercer estado incluía a
todos los que no eran ni nobles ni clérigos. Un grupo social donde se incluían los jornaleros del
campo o los que habitaban en las ciudades, los artesanos, los comerciantes y los profesionales
liberales. Entre ellos había fuertes diferencias económicas, pero a todos les unía la obligación de
pagar impuestos, la necesidad de trabajar, y la carencia de privilegios. """)
        print(response)
        json_response = json.loads(response)
        return json_response


exercise_service = ExerciseService()
