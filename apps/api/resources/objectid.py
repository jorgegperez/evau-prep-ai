from bson import ObjectId


class PydanticObjectId(ObjectId):
    """
    ObjectId field. Compatible with Pydantic.
    """

    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v):
        """
        Validate ObjectId
        """
        try:
            return ObjectId(v)
        except Exception as e:
            raise ValueError(f"Invalid ObjectId: {e}") from e
